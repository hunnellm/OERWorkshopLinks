var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "OER-2025-links",
  "level": "1",
  "url": "OER-2025-links.html",
  "type": "Article",
  "number": "",
  "title": "Links from OER Workshop 2025",
  "body": " Links from OER Workshop 2025    OER Workshop Participants      Collection of useful links from the AIM Workshop Open educational resources: adoption, curation, and customization    PreTeXt Resources   PreTeXt documentation for web hosting    PreTeXt for Instructors    GitHub for Mathematicians    Annotated example    PreTeXt codespace (GitHub)    PreTeXt Examples from documentation    Interactive Exercises    Publication file reference    PreTeXt support (google groups)    PreTeXt announce (google groups)    PreTeXt dev (google groups)     Textbook Links  Discrete Open Math (textbook)   Understanding Linear Algebra (textbook)    Matrix Theory (textbook) Github    Linear Algebra for Team Based Inquiry Learning     PreFigure   Prefigure documentation    PreFigure Playground    PreFigure Documentation    PreFigure codespace (github)     Doenet   doenet.org    Doenet (alpha site)    Doenet Examples    Embed Doenet    PROSE Consortium Discord     Problem builders   WebWork Open Problem Library    GeoGebra    Desmos    MyOpenMath    Asymptote    Calcplot3d (applet)    CalcPlot3D (Documentation)    Runestone Academy   Runestone Academy    Example Files   TBIL Examples    Syllabus worksheet demo (GitHub)    Syllabus Worksheet demo (Website)    Tien Chih Github    Miscellaneous   Sage Cell Server    MathTech.org    MathTech Bluesky    Visual Studio Code    GitHub Desktop    Workshop Notes    PreFigure Upgrade  PreFigure needs to be updated to the latest version of the prefig library. This is a simple process, but it does require some manual steps.    macOS command line upgrade of PreFigure     Force PreFigure to regenerate assets    Upgrade PreTeXt    Upgrade option 1     Upgrade option 2     Update         "
},
{
  "id": "links-1",
  "level": "2",
  "url": "links.html#links-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Open educational resources: adoption, curation, and customization "
},
{
  "id": "step-1",
  "level": "2",
  "url": "links.html#step-1",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": "  macOS command line upgrade of PreFigure  "
},
{
  "id": "step-2",
  "level": "2",
  "url": "links.html#step-2",
  "type": "Figure",
  "number": "2",
  "title": "",
  "body": "  Force PreFigure to regenerate assets  "
},
{
  "id": "pretext1",
  "level": "2",
  "url": "links.html#pretext1",
  "type": "Figure",
  "number": "3",
  "title": "",
  "body": "  Upgrade option 1  "
},
{
  "id": "pretext2",
  "level": "2",
  "url": "links.html#pretext2",
  "type": "Figure",
  "number": "4",
  "title": "",
  "body": "  Upgrade option 2  "
},
{
  "id": "pretext3",
  "level": "2",
  "url": "links.html#pretext3",
  "type": "Figure",
  "number": "5",
  "title": "",
  "body": "  Update  "
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
