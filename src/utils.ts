export function formatNumber(value: number | null, unit: string) {
    return value === null ? '-' : value.toLocaleString('ru-RU') + unit;
}
