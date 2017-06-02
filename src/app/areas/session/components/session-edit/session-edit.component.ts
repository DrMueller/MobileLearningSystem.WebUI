import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { RxFormBuilder, FormWithValidation, FormValidationService } from '../../../../common/widgets/rx-forms';

import { FactSelectComponent } from '../../../fact';

import { Session } from '../../../../models';
import { SessionEditService } from '../../services';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss']
})
export class SessionEditComponent implements OnInit {
  public session: Session;
  public form: FormWithValidation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sessionEditService: SessionEditService,
    private formBuilder: RxFormBuilder,
    private formValidationService: FormValidationService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.subscribeRoute();
    this.buildForm();
  }

  public cancelButtonClicked(): void {
    this.navigateToOverview();
  }

  public saveButtonClicked(): void {
    const session = this.gatherSession();
    this.sessionEditService.saveSession(session);
    this.navigateToOverview();
  }

  public addFactButtonCLicked(): void {
    const options = <NgbModalOptions>{
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    };

    this.modalService.open(FactSelectComponent, options);
  }

  private gatherSession(): Session {
    const result = new Session();
    result.name = this.form.formGroup.get('sessionNameControl')!.value;

    return result;
  }

  private navigateToOverview(): void {
    this.router.navigate(['/sessions']);
  }

  private setFormControlDataIfReady(): void {
    if (this.session && this.form) {
      this.form.formGroup.patchValue({
        sessionNameControl: this.session.name
      });
    };
  };

  private buildForm(): void {
    this.form = this.formBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('sessionNameControl')
      .buildControl()
      .buildForm();

    this.setFormControlDataIfReady();
  }

  private subscribeRoute(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id !== '-1') {
        this.sessionEditService.getSession(id).then(data => {
          this.session = data;
          this.setFormControlDataIfReady();
        });
      } else {
        this.session = this.sessionEditService.createNewSession();
        this.setFormControlDataIfReady();
      }
    });
  }
}
