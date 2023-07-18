import { Component, OnInit } from '@angular/core';
import { ModalClass } from '@shared/classes/modal';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  message = new ModalClass(this.ms);

  constructor(
    private ms: NzModalService
  ) {
  }

  userRegistration: any;
  defaultUser = { id: "28934jnfksjdnfjsdf", email: "jasondoloso@g.com" };
  authenticate(): void {
    // this.message.info('Authentication', 'Verifying');
    this.webAuthnSignup(this.defaultUser).then(response => {
      this.userRegistration = response;
      console.log({response})
      console.log(JSON.stringify(response))
    })
  }

  register(): void {
    this.webAuthnSignin().then(response => {
      console.log(response)
    })
  }

  getChallenge(): any {
    return Uint8Array.from('someChallengeIsHereComOn', c => c.charCodeAt(0))
  }

  webAuthnSignup(user: any): Promise<any> {
    console.log('[webAuthnSignup]');
    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
      // Challenge shoulda come from the server
      challenge: this.getChallenge(),
      rp: {
        name: 'WebAuthn Test',
        // id: 'localhost:4200',
      },
      user: {
        // Some user id coming from the server
        id: Uint8Array.from(user.id, (c:any) => c.charCodeAt(0)),
        name: user.email,
        displayName: user.email,
      },
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        // requireResidentKey: true,
      },
      timeout: 60000,
      attestation: 'direct'
    };

    return navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });

  }

  webAuthnSignin(): Promise<any> {
    const allowCredentials: PublicKeyCredentialDescriptor[] = [{ type: 'public-key', id: this.userRegistration?.id }];

    console.log('allowCredentials', allowCredentials);

    const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: Uint8Array.from('someChallengeIsHereComOn', c => c.charCodeAt(0)),
      allowCredentials,
    };

    console.log({credentialRequestOptions})

    return navigator.credentials.get({
      publicKey: credentialRequestOptions,
    });
  }

}
