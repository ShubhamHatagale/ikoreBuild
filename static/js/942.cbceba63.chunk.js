"use strict";(self.webpackChunkikore_pilates=self.webpackChunkikore_pilates||[]).push([[942],{942:function(e,s,a){a.r(s);var l=a(1413),r=a(885),o=a(2791),n=a(3360),c=a(2677),m=a(3855),t=a(9743),i=a(6355),d=a(1633),h=a(8995),u=(a(8007),a(184));s.default=function(e){console.log(Object.keys(e).length);var s=Object.keys(e).length>0?e.blogData.blogid:0,a=(0,h.cI)({mode:"onChange"}),x=a.register,p=a.handleSubmit,g=a.reset,j=a.formState.errors,_=(0,o.useState)(!1),N=(0,r.Z)(_,2);N[0],N[1];var Z=(0,o.useState)(!1),f=(0,r.Z)(Z,2),b=f[0],y=f[1],v="https://phpstack-899220-3121256.cloudwaysapps.com";return(0,u.jsx)("section",{className:"form_section pd3 pd6",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("h2",{className:"headings text-center pd4",children:"Let\u2019s get going, Shall we?"}),(0,u.jsxs)("div",{className:"col-lg-12",children:[b?(0,u.jsxs)("div",{className:"row",style:{textAlign:"center"},children:[(0,u.jsx)("div",{className:"col-lg-4"}),(0,u.jsx)("div",{className:"col-lg-4",children:(0,u.jsxs)("p",{style:{background:"#ed8c13",color:"white",boxShadow:"1px 1px gray",borderRadius:"4px"},children:["Thank you for getting in touch! ",(0,u.jsx)("br",{}),"One of our colleagues will get back in touch with you soon! Have a great day!"]})}),(0,u.jsx)("div",{className:"col-lg-4"})]}):null,(0,u.jsxs)(m.Z,{className:"home_form",onSubmit:p((function(e){console.log(e),console.log(v);var s=new Headers;s.append("Content-Type","application/json"),fetch("".concat(v,"/enroll/course"),{method:"POST",headers:s,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),y(!0),g(),setTimeout((function(){y(!1)}),5e3)})).catch((function(e){return console.log(e)}))})),children:[(0,u.jsxs)(t.Z,{className:"mb-2 home_from_row",children:[(0,u.jsxs)(m.Z.Group,{className:"col-md-6",controlId:"formGridName",children:[(0,u.jsx)(m.Z.Label,{className:"modal_label",children:"Name"}),(0,u.jsx)(m.Z.Control,(0,l.Z)((0,l.Z)({type:"text"},x("name",{required:!0,pattern:[/[a-z]/,/[A-Z]/,/[0-9]/]})),{},{name:"name",placeholder:"Enter Name"})),(0,u.jsx)(i.m3W,{className:"form_icon_modal"}),j.name&&(0,u.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter Name"})]}),(0,u.jsxs)(m.Z.Group,{className:"col-md-6",controlId:"formGridEmail",children:[(0,u.jsx)(m.Z.Label,{className:"modal_label",children:"Email"}),(0,u.jsx)(m.Z.Control,(0,l.Z)((0,l.Z)({type:"text"},x("email",{required:!0,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i})),{},{name:"email",placeholder:"Enter email"})),(0,u.jsx)(i.SRX,{className:"form_icon_modal"}),j.email&&(0,u.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Check Email"})]})]}),(0,u.jsxs)(t.Z,{className:"mb-2 home_from_row",children:[(0,u.jsxs)(m.Z.Group,{className:"col-md-6",controlId:"formGridPhone",children:[(0,u.jsx)(m.Z.Label,{className:"modal_label",children:"Phone"}),(0,u.jsx)(m.Z.Control,(0,l.Z)((0,l.Z)({type:"number"},x("phone",{required:!0,maxLength:10,minLength:10})),{},{name:"phone",placeholder:"Enter Phone Number"})),(0,u.jsx)(i.DNl,{className:"form_icon_modal"}),j.phone&&(0,u.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter 10 Digit Phone Number"})]}),(0,u.jsxs)(m.Z.Group,{className:"col-md-6",controlId:"formGridState",children:[(0,u.jsx)(m.Z.Label,{className:"modal_label",children:"Course"}),(0,u.jsxs)(m.Z.Select,(0,l.Z)((0,l.Z)({name:"course"},x("course",{required:!0})),{},{children:[(0,u.jsx)("option",{value:""}),d.Z.map((function(e,a){return(0,u.jsx)("option",{selected:e.id===s,value:e.post_title,children:e.post_title})}))]})),(0,u.jsx)(i.V_i,{className:"form_icon_modal"}),j.course&&(0,u.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Select Course "})]})]}),(0,u.jsx)(t.Z,{className:"mb-3",children:(0,u.jsxs)(m.Z.Group,{as:c.Z,controlId:"formGridPhone",children:[(0,u.jsx)(m.Z.Label,{className:"modal_label",children:"Message"}),(0,u.jsx)(m.Z.Control,(0,l.Z)((0,l.Z)({as:"textarea",rows:3},x("message",{required:!0,pattern:[/[a-z]/,/[A-Z]/,/[0-9]/]})),{},{name:"message"})),j.message&&(0,u.jsx)("p",{className:"form_error_message modal_error_msg",children:"Please Enter Message "})]})}),(0,u.jsx)(n.Z,{className:"form_btn",type:"submit",children:"Submit"})]})]})]})})})}}}]);
//# sourceMappingURL=942.cbceba63.chunk.js.map