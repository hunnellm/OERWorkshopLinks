var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  OER Workshop Participants    Collection of useful links from the AIM Workshop Open educational resources: adoption, curation, and customization    "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Links",
  "body": " Links   Discrete Open Math (textbook)   Understanding Linear Algebra (textbook)    Tien Chih Github    Prefigure documentation    Matrix Theory (textbook) Github    doenet.org    PreTeXt documentation for web hosting    WebWork Open Problem Library    Runestone Academy    PreTeXt for Instructors    Annotated example    PreFigure Playground    PreFigure Documentation    PreFigure codespace (github)    Linear Algebra for Team Based Inquiry Learning    GitHub for Mathematicians    Sage Cell Server    PreTeXt codespace (GitHub)    TBIL Examples    Syllabus worksheet demo (GitHub)    Syllabus Worksheet demo (Website)    PreTeXt Examples from documentation    Doenet (alpha site)    GeoGebra    Desmos    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
