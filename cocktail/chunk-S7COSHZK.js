import{K as U,O as W,P as J,Q as K,R as L,U as X,W as Y,X as Z,Y as T,Z as ee,d as H,f as V,g as G}from"./chunk-QOZVNCKA.js";import{$a as x,Ca as C,Eb as $,Fa as F,Ga as O,Ha as d,Hb as z,I as E,L as I,N as v,Qa as P,Ra as N,Sa as w,Ta as a,Ua as c,Va as p,Wa as j,_a as M,ab as h,ba as S,eb as y,fb as A,ga as k,gb as b,hb as Q,jb as s,kb as m,nb as R,ob as u,pa as B,pb as _,qb as g,ra as i,yb as q}from"./chunk-PMWCN7JN.js";var te=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var re=["header"],le=["title"],ce=["subtitle"],pe=["content"],de=["footer"],se=["*",[["p-header"]],[["p-footer"]]],me=["*","p-header","p-footer"];function fe(t,o){t&1&&h(0)}function ue(t,o){if(t&1&&(c(0,"div",1),b(1,1),d(2,fe,1,0,"ng-container",2),p()),t&2){let e=y();u(e.cx("header")),a("pBind",e.ptm("header")),i(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function _e(t,o){if(t&1&&(M(0),_(1),x()),t&2){let e=y(2);i(),g(e.header)}}function ge(t,o){t&1&&h(0)}function ye(t,o){if(t&1&&(c(0,"div",1),d(1,_e,2,1,"ng-container",3)(2,ge,1,0,"ng-container",2),p()),t&2){let e=y();u(e.cx("title")),a("pBind",e.ptm("title")),i(),a("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),i(),a("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function he(t,o){if(t&1&&(M(0),_(1),x()),t&2){let e=y(2);i(),g(e.subheader)}}function Te(t,o){t&1&&h(0)}function ve(t,o){if(t&1&&(c(0,"div",1),d(1,he,2,1,"ng-container",3)(2,Te,1,0,"ng-container",2),p()),t&2){let e=y();u(e.cx("subtitle")),a("pBind",e.ptm("subtitle")),i(),a("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),i(),a("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function Ce(t,o){t&1&&h(0)}function be(t,o){t&1&&h(0)}function ke(t,o){if(t&1&&(c(0,"div",1),b(1,2),d(2,be,1,0,"ng-container",2),p()),t&2){let e=y();u(e.cx("footer")),a("pBind",e.ptm("footer")),i(2),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Me=`
    ${te}

    .p-card {
        display: block;
    }
`,xe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ne=(()=>{class t extends X{name="card";style=Me;classes=xe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ie=new I("CARD_INSTANCE"),ae=(()=>{class t extends Z{componentName="Card";$pcCard=v(ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(T,{self:!0});_componentStyle=v(ne);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){U(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(r=>{this.el.nativeElement.style[r]=e[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=S(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=k(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-card"]],contentQueries:function(r,n,f){if(r&1&&Q(f,W,5)(f,J,5)(f,re,4)(f,le,4)(f,ce,4)(f,pe,4)(f,de,4)(f,K,4),r&2){let l;s(l=m())&&(n.headerFacet=l.first),s(l=m())&&(n.footerFacet=l.first),s(l=m())&&(n.headerTemplate=l.first),s(l=m())&&(n.titleTemplate=l.first),s(l=m())&&(n.subtitleTemplate=l.first),s(l=m())&&(n.contentTemplate=l.first),s(l=m())&&(n.footerTemplate=l.first),s(l=m())&&(n.templates=l)}},hostVars:4,hostBindings:function(r,n){r&2&&(R(n._style()),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[q([ne,{provide:ie,useExisting:t},{provide:Y,useExisting:t}]),F([T]),O],ngContentSelectors:me,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(r,n){r&1&&(A(se),d(0,ue,3,4,"div",0),c(1,"div",1),d(2,ye,3,5,"div",0)(3,ve,3,5,"div",0),c(4,"div",1),b(5),d(6,Ce,1,0,"ng-container",2),p(),d(7,ke,3,4,"div",0),p()),r&2&&(a("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),i(),u(n.cx("body")),a("pBind",n.ptm("body")),i(),a("ngIf",n.header||n.titleTemplate||n._titleTemplate),i(),a("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),i(),u(n.cx("content")),a("pBind",n.ptm("content")),i(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),i(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[G,H,V,L,ee,T],encapsulation:2,changeDetection:0})}return t})();function De(t,o){if(t&1&&(c(0,"li"),_(1),p()),t&2){let e=o.$implicit,r=o.$index;i(),g(r+1+". "+e)}}var D=class t{cocktail=z.required();ingredients=$(()=>{let o=this.cocktail();return Object.keys(o).filter(e=>e.startsWith("strIngredient")).map(e=>o[e]).filter(Boolean)});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-cocktail-detail-page"]],inputs:{cocktail:[1,"cocktail"]},decls:13,vars:4,consts:[[1,"app-cocktail-image"],["alt","\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044F",3,"src"],[1,"app-cocktail-info"]],template:function(e,r){if(e&1&&(c(0,"p-card")(1,"h2"),_(2),p(),c(3,"div",0),j(4,"img",1),p(),c(5,"div",2)(6,"p"),_(7),p(),c(8,"p"),_(9),p(),c(10,"ul"),N(11,De,2,1,"li",null,P),p()()()),e&2){let n=r.cocktail();i(2),g(n.strDrink),i(2),a("src",n.strDrinkThumb,B),i(3),g(n.strGlass),i(2),g(n.strInstructions),i(2),w(r.ingredients())}},dependencies:[ae],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]{display:block;width:100%;height:100%}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card{width:100%;height:100%}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card .p-card-body{height:100%}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card .p-card-content{display:flex;align-items:center;flex-direction:column;overflow:auto}[_nghost-%COMP%]   p-card[_ngcontent-%COMP%]     .p-card .app-cocktail-info{text-align:left}"],changeDetection:0})};export{ae as a,D as b};
