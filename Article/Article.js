// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    this.closeButton = domElement.querySelector('.close-button');
    this.closeButton.addEventListener('mouseover', this.hoverEffect.bind(this));
    this.closeButton.addEventListener('mouseleave', this.hoverEffect.bind(this));
    this.closeButton.addEventListener('click', this.closeArticle.bind(this));
  }

  expandArticle(e) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = this.expandButton.textContent === 'less' ? 'expand' : 'less';
  }

  closeArticle(e) {
    this.domElement.classList.add('article-close');
  }

  hoverEffect(e) {
    this.closeButton.classList.toggle('hover-button');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles);
articles.map(a => new Article(a));