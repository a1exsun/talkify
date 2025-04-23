import { startScopedViewTransition } from '@affine/component';
import { WorkbenchService } from '@affine/core/modules/workbench';
import { useI18n } from '@affine/i18n';
import { useService } from '@toeverything/infra';
import { useCallback } from 'react';

import { SearchInput } from '../../components';
import { searchVTScope } from '../../components/search-input/style.css';
import * as styles from './styles.css';

export const SearchBar = () => {
  const t = useI18n();
  const workbench = useService(WorkbenchService).workbench;

  const navSearch = useCallback(() => {
    startScopedViewTransition(searchVTScope, () => {
      workbench.open('/search');
    });
  }, [workbench]);

  return (
    <div className={styles.wsSelectorAndSearch}>
      <SearchInput placeholder={t['Quick search']()} onClick={navSearch} />
    </div>
  );
};
