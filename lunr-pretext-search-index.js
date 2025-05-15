var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "shorttitlelowercase.html",
  "type": "Article",
  "number": "",
  "title": "Links from OER Workshop 2025",
  "body": " Links from OER Workshop 2025    OER Workshop Participants    Collection of useful links from the AIM Workshop Open educational resources: adoption, curation, and customization        Discrete Open Math (textbook)   Understanding Linear Algebra (textbook)    Tien Chih Github    Prefigure documentation    Matrix Theory (textbook) Github    doenet.org    PreTeXt documentation for web hosting    WebWork Open Problem Library    Runestone Academy    PreTeXt for Instructors    Annotated example    PreFigure Playground    PreFigure Documentation    PreFigure codespace (github)    Linear Algebra for Team Based Inquiry Learning    GitHub for Mathematicians    Sage Cell Server    PreTeXt codespace (GitHub)    TBIL Examples    Syllabus worksheet demo (GitHub)    Syllabus Worksheet demo (Website)    PreTeXt Examples from documentation    Doenet (alpha site)    GeoGebra    Desmos    Interactive Exercises      "
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
