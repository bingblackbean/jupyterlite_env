"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8476],{78476:(e,t,o)=>{o.r(t),o.d(t,{FileEditor:()=>C,FileEditorCodeWrapper:()=>g,FileEditorFactory:()=>y,IEditorTracker:()=>h,TabSpaceStatus:()=>d});var s=o(13271),i=o(76390),n=o(78467),r=o(62471),a=o.n(r);function c(e){const t=(e.translator||n.nullTranslator).load("jupyterlab"),o=e.isSpaces?t.__("Spaces"):t.__("Tab Size");return a().createElement(i.TextItem,{onClick:e.handleClick,source:`${o}: ${e.tabSpace}`,title:t.__("Change Tab indentation…")})}class d extends s.VDomRenderer{constructor(e){super(new d.Model),this._popup=null,this._menu=e.menu,this.translator=e.translator||n.nullTranslator,this.addClass(i.interactiveItem)}render(){return this.model&&this.model.config?a().createElement(c,{isSpaces:this.model.config.insertSpaces,tabSpace:this.model.config.tabSize,handleClick:()=>this._handleClick(),translator:this.translator}):null}_handleClick(){const e=this._menu;this._popup&&this._popup.dispose(),e.aboutToClose.connect(this._menuClosed,this),this._popup=(0,i.showPopup)({body:e,anchor:this,align:"right"})}_menuClosed(){this.removeClass(i.clickedItem)}}!function(e){class t extends s.VDomModel{constructor(){super(...arguments),this._config=null}get config(){return this._config}set config(e){const t=this._config;this._config=e,this._triggerChange(t,this._config)}_triggerChange(e,t){const o=e&&e.insertSpaces,s=e&&e.tabSize,i=t&&t.insertSpaces,n=t&&t.tabSize;o===i&&s===n||this.stateChanged.emit(void 0)}}e.Model=t}(d||(d={}));var l=o(74547);const h=new l.Token("@jupyterlab/fileeditor:IEditorTracker");var u=o(83446),p=o(54278),m=o(90649),_=o(28877);class g extends u.CodeEditorWrapper{constructor(e){super({factory:e.factory,model:e.context.model}),this._ready=new l.PromiseDelegate;const t=this._context=e.context;if(this.addClass("jp-FileEditorCodeWrapper"),this.node.dataset.jpCodeRunner="true",this.node.dataset.jpUndoer="true",t.ready.then((()=>{this._onContextReady()})),t.model.modelDB.isCollaborative){const e=t.model.modelDB;e.connected.then((()=>{const t=e.collaborators;if(!t)return;const o=t.localCollaborator;this.editor.uuid=o.sessionId,this.editor.selectionStyle=Object.assign(Object.assign({},u.CodeEditor.defaultSelectionStyle),{color:o.color}),t.changed.connect(this._onCollaboratorsChanged,this),this._onCollaboratorsChanged()}))}}get context(){return this._context}get ready(){return this._ready.promise}_onContextReady(){this.isDisposed||(this.editor.clearHistory(),this._ready.resolve(void 0))}_onCollaboratorsChanged(){const e=this._context.model.modelDB.collaborators;if(e)for(const t of this.editor.model.selections.keys())e.has(t)||this.editor.model.selections.delete(t)}}class C extends _.Widget{constructor(e){super(),this.addClass("jp-FileEditor");const t=this._context=e.context;this._mimeTypeService=e.mimeTypeService;const o=this.editorWidget=new g(e);this.editor=o.editor,this.model=o.model,t.pathChanged.connect(this._onPathChanged,this),this._onPathChanged(),(this.layout=new _.StackedLayout).addWidget(o)}get context(){return this.editorWidget.context}get ready(){return this.editorWidget.ready}handleEvent(e){this.model&&"mousedown"===e.type&&this._ensureFocus()}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("mousedown",this)}onBeforeDetach(e){this.node.removeEventListener("mousedown",this)}onActivateRequest(e){this._ensureFocus()}_ensureFocus(){this.editor.hasFocus()||this.editor.focus()}_onPathChanged(){const e=this.editor,t=this._context.localPath;e.model.mimeType=this._mimeTypeService.getMimeTypeByFilePath(t)}}class y extends p.ABCWidgetFactory{constructor(e){super(e.factoryOptions),this._services=e.editorServices}createNewWidget(e){const t=this._services.factoryService.newDocumentEditor,o=new C({factory:e=>t(e),context:e,mimeTypeService:this._services.mimeTypeService});return o.title.icon=m.textEditorIcon,new p.DocumentWidget({content:o,context:e})}}}}]);
//# sourceMappingURL=8476.217010e.js.map