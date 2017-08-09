"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.data = null;
        this.http.get('https://alol.io/rest/2.0/user/644')
            .map(function (res) { return res.json().data; })
            .subscribe(function (res) {
            console.log('[response] success:');
            console.dir(res);
            _this.data = res;
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
        }, function (res) {
            console.warn('[response] error:');
            console.dir(res);
        }, function () {
            console.log('[response] done');
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n\t\t<ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n\t\t<ScrollView>\n\t\t\t<StackLayout>\n                <Image src=\"https://pp.userapi.com/c621422/v621422598/20ae8/o_ydnAe0qbg.jpg\"></Image>\n\t\t\t\t<!--<HtmlView html=\"{{ data }}\"></HtmlView>-->\n\t\t\t\t<Label text=\"{{ data | json }}\"></Label>\n\t\t\t</StackLayout>\n\t\t</ScrollView>\n\t",
        styles: ["\n\t\t\n\t\tLabel {\n\t\t\tborder: 20px solid green;\n\t\t\tpadding: 20px;\n\t\t\tbox-sizing: border-box;\n\t\t\twidth: 100%;\n\t\t\twhite-space: normal;\n\t\t\ttext-wrap: normal;\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: 400;\n\t\t\tfont-family: sans-serif;\n\t\t\tline-height: 16px;\n\t\t\tbackground-color: #ddd;\n\t\t}\n\t\t\n        Image {\n\n        }\n\t"]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0NBQXFDO0FBQ3JDLGlDQUErQjtBQUMvQixpQ0FBK0I7QUFtQy9CLElBQWEsWUFBWTtJQUl4QixzQkFBbUIsSUFBVTtRQUE3QixpQkEyQkM7UUEzQmtCLFNBQUksR0FBSixJQUFJLENBQU07UUFGdEIsU0FBSSxHQUFRLElBQUksQ0FBQztRQUd2QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzthQUN6QixTQUFTLENBQ1QsVUFBQyxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsZ0JBQWdCO1lBQ2hCLHNGQUFzRjtZQUN0Riw0Q0FBNEM7WUFDNUMsc0ZBQXNGO1lBQ3RGLDRDQUE0QztZQUM1QyxzRkFBc0Y7WUFDdEYsNENBQTRDO1lBQzVDLHNGQUFzRjtZQUN0Riw0Q0FBNEM7WUFDNUMsS0FBSztRQUNOLENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLEVBQ0Q7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUNELENBQUE7SUFDSCxDQUFDO0lBR0YsbUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLFlBQVk7SUFqQ3hCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsa1hBU1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQyw4V0FtQlIsQ0FBQztLQUNGLENBQUM7cUNBS3dCLFdBQUk7R0FKakIsWUFBWSxDQWtDeEI7QUFsQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBsZVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuXHRcdDxTY3JvbGxWaWV3PlxuXHRcdFx0PFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3BwLnVzZXJhcGkuY29tL2M2MjE0MjIvdjYyMTQyMjU5OC8yMGFlOC9vX3lkbkFlMHFiZy5qcGdcIj48L0ltYWdlPlxuXHRcdFx0XHQ8IS0tPEh0bWxWaWV3IGh0bWw9XCJ7eyBkYXRhIH19XCI+PC9IdG1sVmlldz4tLT5cblx0XHRcdFx0PExhYmVsIHRleHQ9XCJ7eyBkYXRhIHwganNvbiB9fVwiPjwvTGFiZWw+XG5cdFx0XHQ8L1N0YWNrTGF5b3V0PlxuXHRcdDwvU2Nyb2xsVmlldz5cblx0YCxcblx0c3R5bGVzOiBbYFxuXHRcdFxuXHRcdExhYmVsIHtcblx0XHRcdGJvcmRlcjogMjBweCBzb2xpZCBncmVlbjtcblx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXHRcdFx0dGV4dC13cmFwOiBub3JtYWw7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG5cdFx0fVxuXHRcdFxuICAgICAgICBJbWFnZSB7XG5cbiAgICAgICAgfVxuXHRgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cdHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cdFx0dGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hbG9sLmlvL3Jlc3QvMi4wL3VzZXIvNjQ0Jylcblx0XHRcdC5tYXAocmVzPT5yZXMuanNvbigpLmRhdGEpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQocmVzKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1tyZXNwb25zZV0gc3VjY2VzczonKTtcblx0XHRcdFx0XHRjb25zb2xlLmRpcihyZXMpXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gcmVzO1xuXHRcdFx0XHRcdC8vIHRoaXMuZGF0YSA9IGBcblx0XHRcdFx0XHQvLyBcdDxpbWcgc3JjPVwiaHR0cHM6Ly9wcC51c2VyYXBpLmNvbS9jNjIxNDIyL3Y2MjE0MjI1OTgvMjBhZTgvb195ZG5BZTBxYmcuanBnXCIgYWx0PVwiXCI+XG5cdFx0XHRcdFx0Ly8gXHQ8cHJlPiR7SlNPTi5zdHJpbmdpZnkocmVzLG51bGwsMil9PC9wcmU+XG5cdFx0XHRcdFx0Ly8gXHQ8aW1nIHNyYz1cImh0dHBzOi8vcHAudXNlcmFwaS5jb20vYzYyMTQyMi92NjIxNDIyNTk4LzIwYWU4L29feWRuQWUwcWJnLmpwZ1wiIGFsdD1cIlwiPlxuXHRcdFx0XHRcdC8vIFx0PHByZT4ke0pTT04uc3RyaW5naWZ5KHJlcyxudWxsLDIpfTwvcHJlPlxuXHRcdFx0XHRcdC8vIFx0PGltZyBzcmM9XCJodHRwczovL3BwLnVzZXJhcGkuY29tL2M2MjE0MjIvdjYyMTQyMjU5OC8yMGFlOC9vX3lkbkFlMHFiZy5qcGdcIiBhbHQ9XCJcIj5cblx0XHRcdFx0XHQvLyBcdDxwcmU+JHtKU09OLnN0cmluZ2lmeShyZXMsbnVsbCwyKX08L3ByZT5cblx0XHRcdFx0XHQvLyBcdDxpbWcgc3JjPVwiaHR0cHM6Ly9wcC51c2VyYXBpLmNvbS9jNjIxNDIyL3Y2MjE0MjI1OTgvMjBhZTgvb195ZG5BZTBxYmcuanBnXCIgYWx0PVwiXCI+XG5cdFx0XHRcdFx0Ly8gXHQ8cHJlPiR7SlNPTi5zdHJpbmdpZnkocmVzLG51bGwsMil9PC9wcmU+XG5cdFx0XHRcdFx0Ly8gYDtcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignW3Jlc3BvbnNlXSBlcnJvcjonKTtcblx0XHRcdFx0XHRjb25zb2xlLmRpcihyZXMpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnW3Jlc3BvbnNlXSBkb25lJylcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHR9XG5cblxufSJdfQ==