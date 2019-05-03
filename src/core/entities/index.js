import { v4 } from 'uuid';
import makeBuildConcern from './concern';

export const makeConcern = makeBuildConcern({ uuid: v4 });
