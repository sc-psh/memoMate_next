// index.js or a new route file
var express = require('express');
var router = express.Router();
var fs = require('fs');
// Load memo data
var memoData = JSON.parse(fs.readFileSync('data/memos.json'));

// GET memo list
router.get('/memos', function(req, res, next) {
  console.log('[server] memo list : ', memoData);
  res.json(memoData);
});

// GET memo by ID
router.get('/memos/:id', function(req, res, next) {
  var memoId = parseInt(req.params.id); // 문자열을 숫자로 변환
  // Find memo by id
  var memo = memoData.find(memo => memo.id === memoId);

  if (memo) {
    res.json(memo);
  } else {
    res.status(404).json({ error: 'Memo not found' });
  }
});

// POST new memo
router.post('/memos', function(req, res, next) {
  var newMemo = req.body; // Assuming req.body contains new memo data
  
  // Generate new id for the memo
  var maxId = memoData.length > 0 ? Math.max(...memoData.map(memo => memo.id)) : 0;
  newMemo.id = maxId + 1; // Assign a new id
  
  // Add new memo to memoData array
  memoData.push(newMemo);
  // Save memoData to file
  fs.writeFileSync('data/memos.json', JSON.stringify(memoData));
  res.json({ success: true });
});

// PUT update memo
router.put('/memos/:id', function(req, res, next) {
  var memoId = parseInt(req.params.id); // memoId를 숫자로 변환
  var updatedMemo = req.body; // Assuming req.body contains updated memo data
  // Find memo by id and update it
  var index = memoData.findIndex(memo => memo.id === memoId);
  if (index !== -1) {
    memoData[index] = updatedMemo;
    // Save memoData to file
    fs.writeFileSync('data/memos.json', JSON.stringify(memoData));
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Memo not found' });
  }
});


// DELETE memo
router.delete('/memos/:id', function(req, res, next) {
  var memoId = parseInt(req.params.id); // memoId를 숫자로 변환
  // Filter out memo with given id
  memoData = memoData.filter(memo => memo.id !== memoId);
  // Save memoData to file
  fs.writeFileSync('data/memos.json', JSON.stringify(memoData));
  res.json({ success: true });
});

module.exports = router;
