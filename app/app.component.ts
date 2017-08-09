import { Component } from "@angular/core";
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
	selector: "my-app",
	template: `
		<ActionBar title="My Apple" class="action-bar"></ActionBar>
		<ScrollView>
			<StackLayout>
                <Image src="https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg"></Image>
				<!--<HtmlView html="{{ data }}"></HtmlView>-->
				<Label text="{{ data | json }}"></Label>
			</StackLayout>
		</ScrollView>
	`,
	styles: [`
		
		Label {
			border: 20px solid green;
			padding: 20px;
			box-sizing: border-box;
			width: 100%;
			white-space: normal;
			text-wrap: normal;
			font-size: 14px;
			font-weight: 400;
			font-family: sans-serif;
			line-height: 16px;
			background-color: #ddd;
		}
		
        Image {

        }
	`]
})
export class AppComponent {

	public data: any = null;

	constructor(public http: Http) {
		this.http.get('https://alol.io/rest/2.0/user/644')
			.map(res=>res.json().data)
			.subscribe(
				(res) => {
					console.log('[response] success:');
					console.dir(res)
					this.data = res;
					// this.data = `
					// 	<img src="https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg" alt="">
					// 	<pre>${JSON.stringify(res,null,2)}</pre>
					// 	<img src="https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg" alt="">
					// 	<pre>${JSON.stringify(res,null,2)}</pre>
					// 	<img src="https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg" alt="">
					// 	<pre>${JSON.stringify(res,null,2)}</pre>
					// 	<img src="https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg" alt="">
					// 	<pre>${JSON.stringify(res,null,2)}</pre>
					// `;
				},
				(res) => {
					console.warn('[response] error:');
					console.dir(res)
				},
				() => {
					console.log('[response] done')
				}
			)
	}


}