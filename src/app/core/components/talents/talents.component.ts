import { Component, OnInit } from '@angular/core';
import { find } from 'lodash-es';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-talents',
    templateUrl: './talents.component.html',
    styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {

    talentLists: any;

    constructor(private api: ApiService) { }

    ngOnInit(): void {
        this.initializer();
    }

    initializer(): void {
        this.api.getUsersList().subscribe((res: any) => {
            this.talentLists = find(res, (ans: any) => { return ans.role === 'worker' });
        });
        // debugger
    }

    showDetails(list: any) {

    }
}
