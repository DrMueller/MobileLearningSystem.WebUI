import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { EventMediatorService } from 'app/common/core-services/event-mediation';

import { FactSelectComponent } from '../../../fact';
import { Session } from '../../../../models';
import { SessionEditService } from '../../services';


import { SessionEditFactsComponent } from '../session-edit-facts';


@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss']
})
export class SessionEditComponent implements OnInit {
  public session: Session;

  @ViewChild('facts') public factsComp: SessionEditFactsComponent;

  constructor(
    private eventMediatorService: EventMediatorService,
    private router: Router,
    private route: ActivatedRoute,
    private sessionEditService: SessionEditService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.subscribeRoute();
  }

  public cancelButtonClicked(): void {
    this.navigateToOverview();
  }

  public saveButtonClicked(): void {
    const session = this.gatherSession();
    this.sessionEditService.saveSession(session);
    this.navigateToOverview();
  }

  private gatherSession(): Session {
    const session = new Session();
    session.id = this.session.id;

    // TODO, why does the array loose its state in the facts component¿
    this.eventMediatorService.notifyListeners('editDataRequested', this, session);
    this.factsComp.editDataRequested(this, session);
    return session;
  }

  private navigateToOverview(): void {
    this.router.navigate(['/sessions']);
  }


  private subscribeRoute(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id !== '-1') {
        this.sessionEditService.getSession(id).then(data => {
          this.session = data;
        });
      } else {
        this.session = new Session();
      }
    });
  }
}
