/**
 * @openapi
 * /api/jobsheet/one:
 *   post:
 *     summary: Submit a single quiz answer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quizId:
 *                 type: integer
 *                 example: 1
 *               answer:
 *                 type: string
 *                 example: "a"
 *     responses:
 *       200:
 *         description: Correct or incorrect answer message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Correct"
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/jobsheet/many:
 *   post:
 *     summary: Submit answers for multiple quizzes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quizId:
 *                 type: array
 *                 items:
 *                   type: integer
 *                   example: [1, 2, 3]
 *               answer:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ["a", "b", "c"]
 *     responses:
 *       200:
 *         description: Result of the quiz submissions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Correct 2 out of 3 questions"
 *       500:
 *         description: Internal server error
 */

const router = require("express").Router();
const jobsheetController = require("../controllers/jobsheet.controller");

router.post("/one", jobsheetController.submitOne);
router.post("/many", jobsheetController.submitMany);

module.exports = router;
