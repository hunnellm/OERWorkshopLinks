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
  "body": " Links   https:\/\/discrete.openmathbooks.org\/dmoi4.html  https:\/\/understandinglinearalgebra.org\/home.html  https:\/\/tienchih.github.io\/interactiveelements\/section-1.html  https:\/\/prefigure.org\/docs\/sec-math.html  https:\/\/github.com\/Tanaquil18\/matrixtheory  https:\/\/www.doenet.org\/  https:\/\/pretextbook.org\/doc\/guide\/html\/web-hosting.html  https:\/\/webwork.maa.org\/wiki\/Open_Problem_Library  https:\/\/runestone.academy\/ns\/books\/index  https:\/\/mathtech.org\/pfi\/meta-frontmatter.html  https:\/\/pretextbook.org\/examples\/sample-article\/annotated\/section-interesting-corollary.html  https:\/\/davidaustinm.github.io\/prefigure\/  https:\/\/prefigure.org\/docs\/sec-math.html  https:\/\/github.com\/davidaustinm\/prefigure-codespace  https:\/\/library.tbil.org\/2024\/linear-algebra\/GT1.html  https:\/\/g4m.code4math.org\/g4m.html  https:\/\/sagecell.sagemath.org\/  https:\/\/understandinglinearalgebra.org\/ula.html  https:\/\/github.com\/pretextbook\/pretext-codespace  https:\/\/library.tbil.org\/2024\/linear-algebra\/MX4.html  https:\/\/github.com\/mitchkeller\/syllabus-worksheet-demo  https:\/\/math.mitchkeller.phd\/syllabus-worksheet-demo\/  https:\/\/pretextbook.org\/examples.html  https:\/\/alpha.doenet.org\/  https:\/\/www.geogebra.org\/  https:\/\/www.desmos.com\/   "
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
