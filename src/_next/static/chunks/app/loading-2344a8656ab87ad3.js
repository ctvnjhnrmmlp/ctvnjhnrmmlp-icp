(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[555],
	{
		9808: function (e, t, s) {
			Promise.resolve().then(s.bind(s, 7016));
		},
		7016: function (e, t, s) {
			'use strict';
			s.r(t);
			var n = s(5559),
				i = s(1966),
				c = s(6763);
			t.default = function () {
				let [e, t] = c.useState(!0);
				return (0, n.jsx)('section', {
					className: 'flex flex-col gap-6 px-4 bg-background',
					children: e && (0, n.jsx)(i.Z, { finishLoading: () => t(!1) }),
				});
			};
		},
		1966: function (e, t, s) {
			'use strict';
			var n = s(5559),
				i = s(3635),
				c = s(5687),
				a = s(6763);
			t.Z = (e) => {
				let { finishLoading: t } = e,
					[s, l] = a.useState(!1),
					r = () => {
						i.Z.timeline({ complete: () => t() }).add({
							targets: '#splash-container',
							delay: 0,
							scale: 1,
							duration: 5e3,
							easing: 'easeInOutExpo',
						});
					};
				return (
					a.useEffect(() => {
						let e = setTimeout(() => l(!0), 1e3);
						return r(), () => clearTimeout(e);
					}),
					(0, n.jsx)('div', {
						className:
							'flex flex-col min-h-screen justify-center items-center duration-300 bg-background',
					})
				);
			};
		},
	},
	function (e) {
		e.O(0, [322, 192, 221, 744], function () {
			return e((e.s = 9808));
		}),
			(_N_E = e.O());
	},
]);
