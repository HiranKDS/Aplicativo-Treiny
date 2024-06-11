import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {
  userId: string | null = null;
  userName: string | null = null;
  treinos: any[] = []; // Array to store treinos

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loadUserName();
    this.loadTreinos();
  }

  loadUserName() {
    if (this.userId) {
      this.firestore.collection('Users').doc(this.userId).valueChanges().subscribe((user: any) => {
        if (user) {
          this.userName = user.name;
        } else {
          console.error('User not found.');
        }
      });
    }
  }

  loadTreinos() {
    if (this.userId) {
      this.firestore.collection('Users').doc(this.userId).collection('Treinos').valueChanges().subscribe(treinos => {
        this.treinos = treinos;
      });
    }
  }

  goBack() {
    this.router.navigate(['/tabstr/alunos']);
  }

  async addNewTreino() {
    const alert = await this.alertController.create({
      header: 'Novo Treino',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome do Treino'
        },
        {
          name: 'exercicio1',
          type: 'text',
          placeholder: 'Exercício 1'
        },
        {
          name: 'exercicio2',
          type: 'text',
          placeholder: 'Exercício 2'
        },
        {
          name: 'exercicio3',
          type: 'text',
          placeholder: 'Exercício 3'
        },
        {
          name: 'exercicio4',
          type: 'text',
          placeholder: 'Exercício 4'
        },
        {
          name: 'exercicio5',
          type: 'text',
          placeholder: 'Exercício 5'
        },
        {
          name: 'exercicio6',
          type: 'text',
          placeholder: 'Exercício 6'
        },
        {
          name: 'exercicio7',
          type: 'text',
          placeholder: 'Exercício 7'
        },
        {
          name: 'exercicio8',
          type: 'text',
          placeholder: 'Exercício 8'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salvar',
          handler: async (data) => {
            const exercicios = [
              data.exercicio1,
              data.exercicio2,
              data.exercicio3,
              data.exercicio4,
              data.exercicio5,
              data.exercicio6,
              data.exercicio7,
              data.exercicio8
            ].filter(exercicio => exercicio); // Remove valores vazios

            const novoTreino = { nome: data.nome, exercicios };
            this.treinos.push(novoTreino);

            // Salva no Firestore
            if (this.userId) {
              await this.firestore.collection('Users').doc(this.userId).collection('Treinos').add(novoTreino);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteTreino(index: number) {
    const treino = this.treinos[index];
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este treino?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: async () => {
            this.treinos.splice(index, 1);

            // Remove do Firestore
            if (this.userId) {
              const treinosRef = this.firestore.collection('Users').doc(this.userId).collection('Treinos');
              const snapshot = await treinosRef.ref.where('nome', '==', treino.nome).get();
              snapshot.forEach(doc => {
                doc.ref.delete();
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
}







