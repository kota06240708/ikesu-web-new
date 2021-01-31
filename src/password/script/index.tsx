import crypto from 'crypto-js';

export class Password {
  private $$input: HTMLInputElement;

  constructor() {
    this.$$input = document.getElementById('js-password') as HTMLInputElement;

    this.onEnter = this.onEnter.bind(this);
  }

  public init(): void {
    this.$$input = document.getElementById('js-password') as HTMLInputElement;

    if (!this.$$input) {
      return;
    }

    this.$$input.addEventListener('keypress', this.onEnter);
  }

  public remove(): void {
    if (!this.$$input) {
      return;
    }

    this.$$input.removeEventListener('keypress', this.onEnter);
  }

  public checkPassword(str: string): boolean {
    const decrypted = crypto.AES.decrypt(str, 'key');

    return !!(
      process.env.PRODUCT_PASSWORD === decrypted.toString(crypto.enc.Utf8)
    );
  }

  private onEnter(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      const ttt = crypto.AES.encrypt(this.$$input.value, 'key').toString();

      const isValidate = this.checkPassword(ttt);

      if (isValidate) {
        localStorage.setItem('password', ttt);

        window.location.href = '/project';
      } else {
        this.$$input.value = '';
      }
    }
  }
}
