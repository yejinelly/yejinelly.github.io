---
description: Update CV workflow - edit Word file, convert to PDF, and commit to GitHub
---

# CV Update Workflow

This command helps you update your CV following these steps:

## Setup (Already Done)
- Source Word file: `files/YejinLee_CV_source.docx` (gitignored)
- Output PDF: `files/YejinL_CV.pdf` (committed to GitHub)
- CV page: `_pages/cv.md`
- Download filename for users: `YejinL_CV.pdf`

## Update Steps

1. **Edit Word file**: Open and edit `files/YejinLee_CV_source.docx`
2. **Convert to PDF**:
   - Open `files/YejinLee_CV_source.docx` in Word or Preview
   - Export/Save as PDF: `files/YejinL_CV.pdf` (overwrite existing)
3. **Update date**: Update the date in `_pages/cv.md` line 12 to current month/year
4. **Verify**: Check that only PDF is staged (Word file should be gitignored)
5. **Commit**: Commit with message "Update CV - [Month Year]"

## Notes
- Word file stays local (in .gitignore)
- Only PDF gets committed to GitHub
- Users download as `YejinL_CV.pdf`

Ready to help with any step!
