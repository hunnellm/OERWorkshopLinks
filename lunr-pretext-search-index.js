var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "OER-2025-links",
  "level": "1",
  "url": "OER-2025-links.html",
  "type": "Article",
  "number": "",
  "title": "Links from OER Workshop 2025",
  "body": " Links from OER Workshop 2025    OER Workshop Participants      Collection of useful links from the AIM Workshop Open educational resources: adoption, curation, and customization    PreTeXt Resources   PreTeXt documentation for web hosting    PreTeXt for Instructors    GitHub for Mathematicians    Annotated example    PreTeXt codespace (GitHub)    PreTeXt Examples from documentation    Interactive Exercises    Publication file reference     Textbook Links  Discrete Open Math (textbook)   Understanding Linear Algebra (textbook)    Matrix Theory (textbook) Github    Linear Algebra for Team Based Inquiry Learning     PreFigure   Prefigure documentation    PreFigure Playground    PreFigure Documentation    PreFigure codespace (github)     Doenet   doenet.org    Doenet (alpha site)    Doenet Examples    Embed Doenet     Problem builders   WebWork Open Problem Library    GeoGebra    Desmos    MyOpenMath    Asymptote    Calcplot3d (applet)    CalcPlot3D (Documentation)    Runestone Academy   Runestone Academy    Example Files   TBIL Examples    Syllabus worksheet demo (GitHub)    Syllabus Worksheet demo (Website)    Tien Chih Github    Miscellaneous   Sage Cell Server    MathTech.org       "
},
{
  "id": "links-1",
  "level": "2",
  "url": "OER-2025-links.html#links-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Open educational resources: adoption, curation, and customization "
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
