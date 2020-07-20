const articleShare = document.querySelector('.article-share');

const articleSocial = document.querySelector('.article-social');

articleShare.addEventListener('click', () => {
  articleSocial.classList.toggle('toggle');
});
