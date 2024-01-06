import Document from './entities/Document';
import Comment from './entities/Comment';
import Task from './entities/Task';

const ww2Document = new Document('World War II', 'Winston Churchill', '1');
ww2Document.addComment(new Comment('1', 'John Doe', 'Great document!'));
ww2Document.addComment(new Comment('2', 'John Doe', 'Great document!'));
ww2Document.addComment(new Comment('3', 'John Doe', 'Great document!'));
const task = new Task(
  ww2Document,
  'Task 1',
  'John Doe',
  '1',
  'In progress',
  '2020-01-01',
);
task.addComment(new Comment('1', 'John Doe', 'Great task!'));

const clonedTask = task.clone();
console.log(clonedTask);
if (clonedTask.document === task.document) {
  console.log('Document is not cloned');
} else {
  console.log('Document is cloned');
}
if (clonedTask.comments === task.comments) {
  console.log('Comments are not cloned');
} else {
  console.log('Comments are cloned');
}
