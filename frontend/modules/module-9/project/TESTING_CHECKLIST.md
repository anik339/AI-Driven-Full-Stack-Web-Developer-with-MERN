# TaskFlow — Manual QA Checklist

## Task operations
- [ ] Create a task with a title only.
- [ ] Create a task with description, priority, category, and due date.
- [ ] Edit a task and confirm changes are shown.
- [ ] Mark a task completed and active again.
- [ ] Delete a task after the confirmation prompt.
- [ ] Submit an empty or one-character title and confirm validation.

## Search, filters, and sorting
- [ ] Search by title.
- [ ] Search by description.
- [ ] Filter active tasks.
- [ ] Filter completed tasks.
- [ ] Return to all tasks.
- [ ] Change the sorting option and inspect the order.

## Persistence and backup
- [ ] Add tasks and refresh the browser; confirm they remain.
- [ ] Change theme and refresh; confirm the preference remains.
- [ ] Export a JSON backup and confirm the file downloads.
- [ ] Check the app's storage warning behavior if browser storage is blocked.

## Responsive and accessibility
- [ ] Test desktop, tablet, and narrow mobile widths.
- [ ] Navigate using Tab and Shift+Tab.
- [ ] Activate buttons using Enter and Space.
- [ ] Confirm visible focus outlines.
- [ ] Confirm status messages are announced in the live region.

## Edge cases
- [ ] Enter `<script>alert(1)</script>` as a title; it must display as text.
- [ ] Try long titles and descriptions.
- [ ] Add a past due date.
- [ ] Search for text that does not exist.
- [ ] Test the empty task list.
