import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs-extra';
import path from 'path';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_DIR = path.join(__dirname, '../data');

const getFilePath = (filename: string) => path.join(DATA_DIR, filename);

// Helper to ensure data files exist with initial arrays
const ensureDataFiles = async () => {
  const files = ['notices.json', 'events.json', 'gallery.json'];
  for (const file of files) {
    const filePath = getFilePath(file);
    if (!(await fs.pathExists(filePath))) {
      await fs.writeJson(filePath, []);
    } else {
      const content = await fs.readJson(filePath);
      if (!Array.isArray(content)) {
        await fs.writeJson(filePath, []);
      }
    }
  }
};

app.get('/api/notices', async (req, res) => {
  const data = await fs.readJson(getFilePath('notices.json'));
  res.json(data);
});

app.post('/api/notices', async (req, res) => {
  const data = await fs.readJson(getFilePath('notices.json'));
  const newNotice = { id: Date.now(), ...req.body, date: new Date().toISOString() };
  data.push(newNotice);
  await fs.writeJson(getFilePath('notices.json'), data);
  res.json(newNotice);
});

app.get('/api/events', async (req, res) => {
  const data = await fs.readJson(getFilePath('events.json'));
  res.json(data);
});

app.post('/api/events', async (req, res) => {
  const data = await fs.readJson(getFilePath('events.json'));
  const newEvent = { id: Date.now(), ...req.body };
  data.push(newEvent);
  await fs.writeJson(getFilePath('events.json'), data);
  res.json(newEvent);
});

app.get('/api/gallery', async (req, res) => {
  const data = await fs.readJson(getFilePath('gallery.json'));
  res.json(data);
});

app.post('/api/gallery', async (req, res) => {
  const data = await fs.readJson(getFilePath('gallery.json'));
  const newPhoto = { id: Date.now(), ...req.body };
  data.push(newPhoto);
  await fs.writeJson(getFilePath('gallery.json'), data);
  res.json(newPhoto);
});

app.delete('/api/notices/:id', async (req, res) => {
  let data = await fs.readJson(getFilePath('notices.json'));
  data = data.filter((item: any) => item.id !== parseInt(req.params.id));
  await fs.writeJson(getFilePath('notices.json'), data);
  res.json({ success: true });
});

app.delete('/api/events/:id', async (req, res) => {
  let data = await fs.readJson(getFilePath('events.json'));
  data = data.filter((item: any) => item.id !== parseInt(req.params.id));
  await fs.writeJson(getFilePath('events.json'), data);
  res.json({ success: true });
});

app.delete('/api/gallery/:id', async (req, res) => {
  let data = await fs.readJson(getFilePath('gallery.json'));
  data = data.filter((item: any) => item.id !== parseInt(req.params.id));
  await fs.writeJson(getFilePath('gallery.json'), data);
  res.json({ success: true });
});

app.listen(PORT, async () => {
  await ensureDataFiles();
  console.log(`Server running on http://localhost:${PORT}`);
});
