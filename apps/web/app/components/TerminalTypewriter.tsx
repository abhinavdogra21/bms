'use client';

import { useEffect, useState } from 'react';

interface TerminalTypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
}

export default function TerminalTypewriter({ lines, speed = 40, startDelay = 500 }: TerminalTypewriterProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(['']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;

    const line = lines[currentLine]!;

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[currentLine] = line.substring(0, currentChar + 1);
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, speed + Math.random() * 20);
      return () => clearTimeout(timer);
    } else {
      // Line finished, move to next
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
        setDisplayedLines(prev => [...prev, '']);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [started, currentLine, currentChar, lines, speed]);

  return (
    <div className="terminal-typewriter">
      {displayedLines.map((line, i) => (
        <div key={i} className="terminal-line">
          <span className="terminal-prompt">{lines[i]?.startsWith('$') ? '$' : '>'}</span>
          <span className="terminal-text">{lines[i]?.startsWith('$') ? line.slice(2) : lines[i]?.startsWith('>') ? line.slice(2) : line}</span>
          {i === currentLine && currentLine < lines.length && (
            <span className={`terminal-cursor ${cursorVisible ? 'visible' : ''}`}>▊</span>
          )}
        </div>
      ))}
    </div>
  );
}
