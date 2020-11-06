import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TestData {
	name: string;
	active: boolean;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	testData: Observable<TestData>;

	constructor(private router: ActivatedRoute) {
		this.testData = this.router.data.pipe(
			map(data => {
				const resolvedData = data['testData'];
				console.log(resolvedData);
				return resolvedData;
			})
		);
	}

	ngOnInit(): void {}
}
