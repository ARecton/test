document.getElementById('archive-button').addEventListener('click', () => {
  fetch('api/archiveNews', {
      method: 'POST'
  })
  .then(response => {
      if (response.ok) {
          alert('Les nouvelles ont été archivées avec succès !');
      } else {
          alert('Il y a eu une erreur lors de l\'archivage des nouvelles.');
      }
  });
});
