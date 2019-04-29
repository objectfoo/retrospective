/**
 * @param {string} type
 * @return {(o: object) => boolean} type equals o['type']
 */
export const onlyType = type => o => o.type === type;

/**
 *
 * @param {{type: string}[]} concerns
 * @param {string} type
 * @return {{type: string}[]} concerns with type matching type
 */
export const concernByType = (concerns, type) => concerns.filter(onlyType(type));

/**
 * @param {string} id
 * @return {(o: object) => boolean} id !== o['id]
 */
export const notId = id => o => o.id !== id;
