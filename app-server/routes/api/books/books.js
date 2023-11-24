const Router = require('express').Router;
const db = require('../../../config/database');

// /api/books
function ApiRouterBook() {
  const router = Router(); // Membuat router express

  // List
  router.get('/', async (req, res) => {
    try {
      const data = await db.select('*').from('books');
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while fetching the book list.',
      });
    }
  });

  // Single
  router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const data = await db.select('*').from('books').where('books_id', '=', id);
      if (data.length === 0) {
        res.status(404).json({
          error: 'Book not found',
        });
      } else {
        res.status(200).json({
          data: data[0],
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while fetching the book.',
      });
    }
  });

  // Create
  router.post('/', async (req, res) => {
    const data = req.body;
    try {
      // Insert the new book data into the database
      const [bookId] = await db('books').insert({
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        published_year: data.published_year,
        genre: data.genre,
        copies_available: data.copies_available,
        total_copies: data.total_copies,
      }).returning('books_id');

      res.status(201).json({
        message: 'Create success!',
        data: {
          books_id: bookId,
          ...data,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while creating the book.',
      });
    }
  });

  // Update
  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
      // Update buku di database nya
      await db('books').where('books_id', id).update({
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        published_year: data.published_year,
        genre: data.genre,
        copies_available: data.copies_available,
        total_copies: data.total_copies,
      });

      res.status(200).json({
        message: 'Update success!',
        data,
      });
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while updating the book.',
      });
    }
  });

  // Delete
  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      // Hapus buku dari database
      await db('books').where('books_id', id).del();

      res.status(204).send();
    } catch (error) {
      res.status(500).json({
        error: 'An error occurred while deleting the book.',
      });
    }
  });

  return router;
}

module.exports = ApiRouterBook;
