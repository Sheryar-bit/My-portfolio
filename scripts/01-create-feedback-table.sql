
CREATE TABLE IF NOT EXISTS feedback (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous feedback submissions" ON feedback
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view feedback" ON feedback
  FOR SELECT 
  TO authenticated 
  USING (true);
