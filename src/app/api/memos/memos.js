///api/memos.js

import fs from 'fs';

// Load memo data
const memoDataPath = 'data/memos.json';

export default function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      // GET memo list
      try {
        const memoData = JSON.parse(fs.readFileSync(memoDataPath, 'utf-8'));
        console.log('[server] memo list : ', memoData);
        res.status(200).json(memoData);
      } catch (error) {
        console.error("Error reading memos:", error);
        res.status(500).json({ error: 'Error reading memos' });
      }
      break;
    case 'POST':
      // POST new memo
      var newMemo = body; // Assuming req.body contains new memo data

      // Generate new id for the memo
      var maxId = memoData.length > 0 ? Math.max(...memoData.map(memo => memo.id)) : 0;
      newMemo.id = maxId + 1; // Assign a new id

      // Add new memo to memoData array
      memoData.push(newMemo);
      // Save memoData to file
      fs.writeFileSync('data/memos.json', JSON.stringify(memoData));
      res.json({ success: true });
      break;
    case 'PUT':
      // PUT update memo
      var memoId = parseInt(query.id); // memoId를 숫자로 변환
      var updatedMemo = body; // Assuming req.body contains updated memo data
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
      break;
    case 'DELETE':
      // DELETE memo
      var memoId = parseInt(query.id); // memoId를 숫자로 변환
      // Filter out memo with given id
      memoData = memoData.filter(memo => memo.id !== memoId);
      // Save memoData to file
      fs.writeFileSync('data/memos.json', JSON.stringify(memoData));
      res.json({ success: true });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
