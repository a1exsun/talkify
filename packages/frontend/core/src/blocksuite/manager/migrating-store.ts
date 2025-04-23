import {
  type StoreExtensionContext,
  StoreExtensionManager,
  StoreExtensionProvider,
} from '@blocksuite/affine/ext-loader';
import { MigratingStoreExtension } from '@blocksuite/affine/extensions/store';

import { AIChatBlockSchemaExtension } from '../ai/blocks/ai-chat-block/model';

class MigratingAffineStoreExtension extends StoreExtensionProvider {
  override name = 'affine-store-extensions';

  override setup(context: StoreExtensionContext) {
    super.setup(context);
    context.register(AIChatBlockSchemaExtension);
  }
}

const manager = new StoreExtensionManager([
  MigratingAffineStoreExtension,
  MigratingStoreExtension,
]);

export function getStoreManager() {
  return manager;
}
