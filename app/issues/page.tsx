import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
const IssuesPage = () => {
  return (
    <div>
      <h1>IssuesPage</h1>
      <br />
      <Button><Link href='issues/newIssue'>New Issue</Link></Button>
    </div>
  )
}

export default IssuesPage