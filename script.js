// Definição da classe Personagem
class Personagem {
  constructor(nome, vitorias, derrotas) {
    this.nome = nome;
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.nivel = this.calcularNivel();
  }

  // Método para calcular o saldo de vitórias
  calcularSaldo() {
    return this.vitorias - this.derrotas;
  }

  // Método para determinar o nível do jogador
  calcularNivel() {
    const saldo = this.calcularSaldo();
    if (saldo >= 10) {
      return 'Lendário';
    } else if (saldo >= 5) {
      return 'Experiente';
    } else if (saldo >= 0) {
      return 'Iniciante';
    } else {
      return 'Novato';
    }
  }
}

// Função para criar um novo personagem e calcular seu nível
function criarPersonagem(nome, vitorias, derrotas) {
  const personagem = new Personagem(nome, vitorias, derrotas);
  return personagem;
}

// Exemplo de uso
const nome = gets(); // Nome do personagem
const vitorias = parseInt(gets()); // Número de vitórias
const derrotas = parseInt(gets()); // Número de derrotas

const personagem = criarPersonagem(nome, vitorias, derrotas);

print("Nome: " + personagem.nome);
print("Vitórias: " + personagem.vitorias);
print("Derrotas: " + personagem.derrotas);
print("Saldo: " + personagem.calcularSaldo());
print("Nível: " + personagem.nivel);
