import { CodeEditor } from '@arietta-studio/ui';
import { useState } from 'react';

import { content } from '../../Markdown/demos/data';

export default () => {
  const [code, setCode] = useState<string>(content);
  return <CodeEditor language="md" onValueChange={setCode} resize={false} value={code} />;
};
