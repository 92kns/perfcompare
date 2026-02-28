import SubtestsRevisionRow from './SubtestsRevisionRow';
import { STUDENT_T } from '../../../common/constants';
import type { CombinedResultsItemType } from '../../../types/state';
import { TestVersion } from '../../../types/types';

function SubtestsTableContent(props: SubtestsTableContentProps) {
  const {
    results,
    identifier,
    rowGridTemplateColumns,
    replicates,
    testVersion,
    expandAll,
  } = props;

  if (!results.length) {
    return null;
  }

  return (
    <>
      {results.map((result) => (
        <SubtestsRevisionRow
          key={identifier + result.platform}
          result={result}
          gridTemplateColumns={rowGridTemplateColumns}
          replicates={replicates}
          testVersion={testVersion ?? STUDENT_T}
          expandAll={expandAll}
        />
      ))}
    </>
  );
}

interface SubtestsTableContentProps {
  results: CombinedResultsItemType[];
  identifier: string;
  rowGridTemplateColumns: string;
  replicates: boolean;
  testVersion?: TestVersion;
  expandAll: boolean;
}

export default SubtestsTableContent;
