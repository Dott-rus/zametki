---
{"publish":true,"created":"2025-09-15T23:59:34.882+03:00","modified":"2025-09-16T00:02:17.272+03:00","cssclasses":""}
---

Да, я прямо запарился над ней...
Можно чекнуть тут [[theme.ipynb]] или тут

# Код
```python
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import matplotlib.patheffects as path_effects
# Стиль
my_style = {"figure.facecolor": "#1e1e2f",
    "axes.facecolor": "#2e2e3e",
    "axes.edgecolor": "#cccccc",
    "axes.labelcolor": "#ffffff",
    "xtick.color": "#ffffff",
    "ytick.color": "#ffffff",
    "grid.color": "#444466",
    "grid.linestyle": "--",
    "grid.alpha": 0.5,
    "lines.linewidth": 2,
    "lines.color": "#ff0000",
    "font.size": 12}
plt.rcParams.update(my_style)
# Загружаем аватарку
img = mpimg.imread(r"D:\\Materials\\My Work\\Avatar_NEWNEWGRAD.png")
h, w = img.shape[:2]
aspect = w / h
x0, x1 = 0, max(x)/2
y0 = 0
y1 = y0 + (x1 - x0) / aspect
plt.imshow(img, extent=[0, 1, 0, 1], transform=plt.gca().transAxes, alpha=0.2, zorder=0)

#=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
# Данные
x = [1**2, 2**2, 3**2, 4**2]
y = [10**2, 20**2, 25**2, 30**2]
  

plt.plot(x,y)
plt.grid(True, zorder=2)
plt.title("TITLE")
plt.xlabel('X Axis', labelpad=10)
plt.ylabel('Y Axis', labelpad=10)
plt.show()
```