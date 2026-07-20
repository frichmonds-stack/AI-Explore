import toolsData from '../content/tools.json';
import guidesData from '../content/guides.json';

const { meta } = toolsData;
const { difficulties } = guidesData.meta;

export const useCatLabel = (id) => meta.useCategories.find((u) => u.id === id)?.label || id;
export const pedLabel = (id) => meta.pedagogyFrameworks.find((p) => p.id === id)?.label || id;
export const diffLabel = (id) => difficulties.find((d) => d.id === id)?.label || id;
