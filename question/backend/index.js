const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const gradeTable = [
  { minMarks: 90, maxMarks: 100, grade: 'A+' },
  { minMarks: 80, maxMarks: 89, grade: 'A' },
  { minMarks: 70, maxMarks: 79, grade: 'B+' },
  { minMarks: 60, maxMarks: 69, grade: 'B' },
  { minMarks: 50, maxMarks: 59, grade: 'C' },
  { minMarks: 0,  maxMarks: 49, grade: 'D' }
];

const personalityTraits = [
  { grade: 'A+', trait: 'Highly ambitious and a perfectionist' },
  { grade: 'A',  trait: 'Motivated and detail-oriented' },
  { grade: 'B+', trait: 'Balanced and reliable' },
  { grade: 'B',  trait: 'Methodical and practical' },
  { grade: 'C',  trait: 'Easy-going and flexible' },
  { grade: 'D',  trait: 'Needs more focus and effort' }
];

const getGrade = (averageMarks) => {
  for (let gradeObj of gradeTable) {
    if (averageMarks >= gradeObj.minMarks && averageMarks <= gradeObj.maxMarks) {
      return gradeObj.grade;
    }
  }
  return null;
};

const getPersonalityTrait = (grade) => {
  const traitObj = personalityTraits.find(trait => trait.grade === grade);
  return traitObj ? traitObj.trait : "No personality trait found for this grade.";
};

app.post('/api/personality', (req, res) => {
  const { name, subject1, subject2, subject3 } = req.body;

  if (!name || subject1 == null || subject2 == null || subject3 == null) {
    return res.status(400).json({ message: "Please provide all fields: name, subject1, subject2, subject3" });
  }

  const averageMarks = (subject1 + subject2 + subject3) / 3;
  const grade = getGrade(averageMarks);
  const personalityTrait = getPersonalityTrait(grade);

  return res.status(200).json({
    name,
    averageMarks,
    grade,
    personalityTrait
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
