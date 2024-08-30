import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../services/register/register.service';
import { UpdateTableService } from '../../services/update-table/update-table.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(NonNullableFormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private updateTablesService = inject(UpdateTableService);
  registerForms = this.fb.group({
    nome: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
    sexo: this.fb.control<string>('', Validators.required),
    idade: this.fb.control<number>(0, [Validators.required, Validators.min(0)]),
    cidade: this.fb.control<string>('', Validators.required),
    bairro: this.fb.control<string>('', Validators.required),
    escolaridade: this.fb.control<string>('', Validators.required),
    estadoCivil: this.fb.control<string>('', Validators.required),
    cor: this.fb.control<string>('', Validators.required),
    numeroContato: this.fb.control<string>('', [Validators.required, Validators.minLength(11)]),
    tipoTrabalho: this.fb.control<string>('', Validators.required)
  });

  constructor(private toastr: ToastrService, private registerService: RegisterService,public activeModal: NgbActiveModal) {}


  onSubmit() {
    console.log(this.registerForms.getRawValue());
    // this.registerService.postRegister(this.registerForms.getRawValue()).subscribe(
    //   (response) => {
    //     this.toastr.success('Funcionário cadastrado com sucesso');
    //     this.cdr.detectChanges(); // Força a detecção de mudanças
    //     this.updateTablesService.updateTable();
    //     this.activeModal.dismiss('success');
    //   },
    //   (error) => {
    //     this.toastr.error('Erro ao cadastrar funcionário');
    //     this.cdr.detectChanges(); // Força a detecção de mudanças em caso de erro
    //   }
    // );
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.registerForms.valid) {
      this.onSubmit();
    }
  }
}
