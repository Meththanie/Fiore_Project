const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const path = require('path'); // Needed for logo path
// const Budget = require('../models/Budget'); // Uncomment if you have Budget model

// Display Expense Form (the one from budget.ejs)
router.get('/', (req, res) => {
  res.render('budget');
});

// Display Add Budget Page (old feature)
router.get('/add-budget', (req, res) => {
  res.render('add_budget');
});

// Handle Add Budget Submission (old feature)
router.post('/add-budget', async (req, res) => {
  const { category, amount, description } = req.body;

  try {
    const newBudget = new Budget({
      category,
      amount,
      description,
      date: new Date()
    });

    await newBudget.save();
    res.redirect('/budget/budgets');
  } catch (error) {
    console.error('Error adding budget:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Display All Budgets (old feature)
router.get('/budgets', async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.render('budgets', { budgets });
  } catch (error) {
    console.error('Error fetching budgets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Generate Multi-Item Receipt PDF (professionally upgraded)
router.post('/generate-receipt', (req, res) => {
    const { itemName, itemAmount } = req.body;
  
    const doc = new PDFDocument({ margin: 50 });
    const filename = `receipt_${Date.now()}.pdf`;
  
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  
    const itemColumnX = 100;
    const amountColumnX = 400;
    const lineHeight = 24;
  
    // Add Logo
    const logoPath = path.join(__dirname, '../public/img/favicon.jpg'); // Adjust according to your folder
    try {
      doc.image(logoPath, 230, 20, { width: 120 }); // Centered logo
    } catch (error) {
      console.warn('Logo not found, skipping logo.');
    }
  
    doc.moveDown(4); // Move down after logo
  
    // Header
    doc
      .fontSize(26)
      .fillColor('#333333')
      .text('Budget Receipt', { align: 'center' })
      .moveDown(0.5);
  
    doc
      .fontSize(14)
      .fillColor('gray')
      .text(`Date: ${new Date().toLocaleDateString()}`, { align: 'center' })
      .moveDown(2);
  
    // Table Header
    let y = doc.y;
    doc
      .fontSize(16)
      .fillColor('#000')
      .text('Item', itemColumnX, y)
      .text('Amount (Rs)', amountColumnX, y);
  
    y += lineHeight;
  
    // Horizontal Line
    doc
      .moveTo(50, y - 5)
      .lineTo(550, y - 5)
      .strokeColor('#cccccc')
      .stroke();
  
    y += 10;
  
    let total = 0;
  
    if (Array.isArray(itemName) && Array.isArray(itemAmount)) {
      for (let i = 0; i < itemName.length; i++) {
        const name = itemName[i];
        const amount = parseFloat(itemAmount[i]) || 0;
        total += amount;
  
        // Draw item
        doc
          .fontSize(14)
          .fillColor('#000')
          .text(name, itemColumnX, y);
  
        // Dotted line between item and amount
        const textWidth = doc.widthOfString(name);
        const dotsStart = itemColumnX + textWidth + 10;
        const dotsEnd = amountColumnX - 10;
  
        let dotsY = y + 12; // Middle of text
        for (let x = dotsStart; x < dotsEnd; x += 5) {
          doc.circle(x, dotsY, 0.5).fill('#cccccc');
        }
  
        // Draw amount
        doc
          .fillColor('#000')
          .text(amount.toFixed(2), amountColumnX, y);
  
        y += lineHeight;
      }
    } else {
      const name = itemName;
      const amount = parseFloat(itemAmount) || 0;
      total += amount;
  
      doc
        .fontSize(14)
        .fillColor('#000')
        .text(name, itemColumnX, y);
  
      const textWidth = doc.widthOfString(name);
      const dotsStart = itemColumnX + textWidth + 10;
      const dotsEnd = amountColumnX - 10;
  
      let dotsY = y + 12;
      for (let x = dotsStart; x < dotsEnd; x += 5) {
        doc.circle(x, dotsY, 0.5).fill('#cccccc');
      }
  
      doc
        .fillColor('#000')
        .text(amount.toFixed(2), amountColumnX, y);
  
      y += lineHeight;
    }
  
    // Line before total
    doc
      .moveTo(50, y - 5)
      .lineTo(550, y - 5)
      .strokeColor('#cccccc')
      .stroke();
  
    y += 10;
  
    // Total (Bold)
    doc
      .font('Helvetica-Bold')
      .fontSize(18)
      .fillColor('#000')
      .text('Total', itemColumnX, y)
      .text(`Rs. ${total.toFixed(2)}`, amountColumnX, y);
  
    y += lineHeight * 2;
  
    // Footer - Center aligned
    doc
      .font('Helvetica')
      .fontSize(12)
      .fillColor('gray')
      .text('Thank you for using our service!', 0, y, { align: 'center' });
  
    doc.pipe(res);
    doc.end();
  });
  

module.exports = router;
