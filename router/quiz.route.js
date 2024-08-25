/**
 * @openapi
 * /api/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz:
 *                 type: string
 *                 example: "What is the capital of France?"
 *               a:
 *                 type: string
 *                 example: "Paris"
 *               b:
 *                 type: string
 *                 example: "London"
 *               c:
 *                 type: string
 *                 example: "Berlin"
 *               d:
 *                 type: string
 *                 example: "Madrid"
 *               key:
 *                 type: string
 *                 example: "a"
 *               categoryId:
 *                 type: string
 *                 example: "1"
 *               levelId:
 *                 type: string
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Quiz created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quiz created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     quiz:
 *                       type: string
 *                       example: "What is the capital of France?"
 *                     a:
 *                       type: string
 *                       example: "Paris"
 *                     b:
 *                       type: string
 *                       example: "London"
 *                     c:
 *                       type: string
 *                       example: "Berlin"
 *                     d:
 *                       type: string
 *                       example: "Madrid"
 *                     key:
 *                       type: string
 *                       example: "a"
 *                     categoryId:
 *                       type: string
 *                       example: "1"
 *                     levelId:
 *                       type: string
 *                       example: "2"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes:
 *   get:
 *     summary: Get all quizzes
 *     responses:
 *       200:
 *         description: Successfully retrieved list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quizzes retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       quiz:
 *                         type: string
 *                         example: "What is the capital of France?"
 *                       a:
 *                         type: string
 *                         example: "Paris"
 *                       b:
 *                         type: string
 *                         example: "London"
 *                       c:
 *                         type: string
 *                         example: "Berlin"
 *                       d:
 *                         type: string
 *                         example: "Madrid"
 *                       key:
 *                         type: string
 *                         example: "a"
 *                       categoryId:
 *                         type: string
 *                         example: "1"
 *                       levelId:
 *                         type: string
 *                         example: "2"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes/{id}:
 *   get:
 *     summary: Get a quiz by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved the quiz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quiz retrieved successfully with id = 1"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     quiz:
 *                       type: string
 *                       example: "What is the capital of France?"
 *                     a:
 *                       type: string
 *                       example: "Paris"
 *                     b:
 *                       type: string
 *                       example: "London"
 *                     c:
 *                       type: string
 *                       example: "Berlin"
 *                     d:
 *                       type: string
 *                       example: "Madrid"
 *                     key:
 *                       type: string
 *                       example: "a"
 *                     categoryId:
 *                       type: string
 *                       example: "1"
 *                     levelId:
 *                       type: string
 *                       example: "2"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes/{id}:
 *   put:
 *     summary: Update a quiz by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quiz:
 *                 type: string
 *                 example: "Updated quiz question"
 *               a:
 *                 type: string
 *                 example: "Updated option A"
 *               b:
 *                 type: string
 *                 example: "Updated option B"
 *               c:
 *                 type: string
 *                 example: "Updated option C"
 *               d:
 *                 type: string
 *                 example: "Updated option D"
 *               key:
 *                 type: string
 *                 example: "b"
 *               categoryId:
 *                 type: string
 *                 example: "1"
 *               levelId:
 *                 type: string
 *                 example: "2"
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quiz updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     quiz:
 *                       type: string
 *                       example: "Updated quiz question"
 *                     a:
 *                       type: string
 *                       example: "Updated option A"
 *                     b:
 *                       type: string
 *                       example: "Updated option B"
 *                     c:
 *                       type: string
 *                       example: "Updated option C"
 *                     d:
 *                       type: string
 *                       example: "Updated option D"
 *                     key:
 *                       type: string
 *                       example: "b"
 *                     categoryId:
 *                       type: string
 *                       example: "1"
 *                     levelId:
 *                       type: string
 *                       example: "2"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quiz with ID = 1 deleted successfully"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes/category/{id}:
 *   get:
 *     summary: Get quizzes by category ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Category ID
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Successfully retrieved quizzes by category ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quizzes retrieved successfully with categoryId = 1"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       quiz:
 *                         type: string
 *                         example: "What is the capital of France?"
 *                       a:
 *                         type: string
 *                         example: "Paris"
 *                       b:
 *                         type: string
 *                         example: "London"
 *                       c:
 *                         type: string
 *                         example: "Berlin"
 *                       d:
 *                         type: string
 *                         example: "Madrid"
 *                       key:
 *                         type: string
 *                         example: "a"
 *                       categoryId:
 *                         type: string
 *                         example: "1"
 *                       levelId:
 *                         type: string
 *                         example: "2"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/quizzes/level/{id}:
 *   get:
 *     summary: Get quizzes by level ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Level ID
 *         schema:
 *           type: string
 *           example: "2"
 *     responses:
 *       200:
 *         description: Successfully retrieved quizzes by level ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Quizzes retrieved successfully with levelId = 2"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       quiz:
 *                         type: string
 *                         example: "What is the capital of France?"
 *                       a:
 *                         type: string
 *                         example: "Paris"
 *                       b:
 *                         type: string
 *                         example: "London"
 *                       c:
 *                         type: string
 *                         example: "Berlin"
 *                       d:
 *                         type: string
 *                         example: "Madrid"
 *                       key:
 *                         type: string
 *                         example: "a"
 *                       categoryId:
 *                         type: string
 *                         example: "1"
 *                       levelId:
 *                         type: string
 *                         example: "2"
 *       500:
 *         description: Internal server error
 */

const router = require("express").Router();
const quizController = require("../controllers/quiz.controller");

router.post("/", quizController.create);
router.get("/", quizController.getAll);
router.get("/:id", quizController.findOne);
router.put("/:id", quizController.update);
router.delete("/:id", quizController.delete);
router.get("/category/:id", quizController.getByCategoryId);
router.get("/level/:id", quizController.getByLevelId);

module.exports = router;
