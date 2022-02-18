import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(persist(set => {
	return {
		meta: {},
		setBookmark(id, checked) {
			set(
				produce(state => {
					if (state.meta[id]) {
						state.meta[id].checked = checked;
					} else {
						state.meta[id] = { checked };
					}
				})
			);
		},
	};
}, {name: "exerciseMeta"}));

export default useStore;
