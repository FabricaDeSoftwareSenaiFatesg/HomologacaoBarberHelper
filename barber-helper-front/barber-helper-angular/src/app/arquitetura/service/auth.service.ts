export class AuthService {

  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = false;
  }

  estaAutenticado(): boolean {
    return this.isAuthenticated;
  }

  sair(): void {
    this.isAuthenticated = false;
  }

  entrar(): void {
    this.isAuthenticated = true;
  }

}
