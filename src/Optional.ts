// safely select nested value
export function Optional<T = any>(obj: any, proxy: (obj: any) => T, def: any = undefined): T {
	try {
		return proxy(obj) || def
	} catch (e) {
		return def;
	}
}
