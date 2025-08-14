
CREATE TABLE IF NOT EXISTS feedback (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous feedback submission" ON feedback
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read feedback" ON feedback
  FOR SELECT 
  TO authenticated 
  USING (true);

GRANT INSERT ON feedback TO anon;
GRANT SELECT ON feedback TO authenticated;
GRANT USAGE ON SEQUENCE feedback_id_seq TO anon;
