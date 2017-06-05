import { Component, OnInit, Input } from '@angular/core';

import { EventMediatorService } from 'app/common/core-services/event-mediation';
import { RxFormBuilder, FormWithValidation, FormValidationService, ValidatorFactoryService } from '../../../../common/widgets/rx-forms';

import { Session } from '../../../../models';

@Component({
  selector: 'app-session-edit-data',
  templateUrl: './session-edit-data.component.html',
  styleUrls: ['./session-edit-data.component.scss']
})
export class SessionEditDataComponent implements OnInit {
  @Input() public session: Session;

  public form: FormWithValidation;

  constructor(
    private eventMediatorService: EventMediatorService,
    private formBuilder: RxFormBuilder,
    private formValidationService: FormValidationService,
    private validatorFactoryService: ValidatorFactoryService
  ) { }

  ngOnInit() {
    this.eventMediatorService.registerListener('editDataRequested', this.editDataRequested.bind(this));
    this.buildForm();
  }

  private editDataRequested(sender: any, data: any): void {
    const session = <Session>data;
    this.form.setModelFromControls(session);
  }


  private buildForm(): void {
    this.form = this.formBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('sessionNameControl')
      .withModelBinding('name')
      .withValidation(this.validatorFactoryService.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .buildForm();

    this.form.setControlDataFromModel(this.session);
  }
}
