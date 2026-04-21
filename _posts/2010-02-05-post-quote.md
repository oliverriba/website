---

layout: post
title: "Quasi-Normal Modes and Teukolsky's Equation"
date: 2026-04-21
categories: [general relativity, black holes, mathematical physics]
tags: [QNM, Kerr, Teukolsky, gravitational waves, spectral theory]
math: true
----------

## Introduction

Within general relativity, *quasi-normal modes* (QNMs) arise in the analysis of linear perturbations of fixed gravitational backgrounds. The perturbations obey linear second-order differential equations, whose symmetry properties are dictated by the symmetries of the background. In most cases, these symmetries allow one to separate variables with an appropriate choice of coordinates, reducing the system to a set of linear ordinary differential equations (ODEs) or a single ODE. The ODEs are supplemented by boundary conditions, usually imposed at the black hole’s horizon and at spatial infinity [Berti2009].

In 1973, Teukolsky provided the master equation governing perturbations of Kerr black holes by reformulating linearised Einstein equations into the Newman–Penrose formalism [Teukolsky1973a; Teukolsky1973b]. Due to the stationary and axisymmetric nature of Kerr spacetime, Teukolsky's equation can be separated into two ODEs:

1. *Teukolsky's radial equation*
2. *Teukolsky's angular equation*

The quasi-normal modes of Kerr black hole perturbations are the *eigenmodes* of these ODEs.

After a perturbation, such as a binary black hole merger, a black hole rings like a damped oscillator—akin to a church bell—producing gravitational wave signals.

The time domain of this damped oscillation is determined by discrete quasi-normal mode frequencies gathered from Teukolsky's equation, known as “ringdown” frequencies [London2023a].

L. London’s papers are concerned with Teukolsky's radial equation. The papers address two issues:

1. Whether there is an appropriate scalar product for the quasinormal modes' radial functions
2. Whether these radial functions are underpinned by classical polynomials, or some generalisation thereof

The following sections describe the motivations behind these aims.

---

## London 2023a, 2023b

### Motivations

The motivation behind addressing these issues arises from the deeper question of whether the quasi-normal modes of Teukolsky's radial equation are orthogonal and complete.

The eigenfunctions of Teukolsky's *angular* equation satisfy these properties because it admits a well-defined scalar product and is closely related to classical orthogonal polynomial structures—particularly Jacobi polynomials. From the scalar product, orthogonality can be expressed. From a polynomial structure, by framing Teukolsky's equation as a Sturm–Liouville problem, completeness can be understood. In the angular equation, spectral decomposition can also be represented.

Finding a *radial* scalar product and approximating Teukolsky's equation as a canonical polynomial problem (in particular, Heun polynomials) may provide a framework for understanding the orthogonality and completeness of the quasi-normal modes of Teukolsky's radial equation.

---

### Constructing a Radial Scalar Product

London defines the radial scalar product via the following integral:

$$
\langle a \mid b \rangle = \int_{0}^{1} a(\xi),b(\xi),\xi^{B_{0}},(1-\xi)^{B_{1}} \exp!\left(\frac{B_{2}}{1-\xi}\right), d\xi .
$$

This expression defines a scalar product between two radial quasi-normal mode solutions $a(\xi)$ and $b(\xi)$, constructed over a transformed radial coordinate $\xi \in [0,1]$, with a non-trivial weighting function:

$$
W(\xi) = \xi^{B_0} (1 - \xi)^{B_1} \exp!\left(\frac{B_2}{1 - \xi}\right).
$$

The structure of $W(\xi)$ is chosen to regularise the behaviour of the quasi-normal mode solutions at the boundaries of the domain. In particular:

* The algebraic factors $\xi^{B_0}$ and $(1-\xi)^{B_1}$ control behaviour near $\xi = 0$ and $\xi = 1$
* The exponential factor compensates for strong growth near the horizon limit [London2023a]

Overall, this weighting ensures that the scalar product remains finite for physically relevant quasi-normal mode solutions, despite their non-square-integrable behaviour on the real radial domain.

The resulting construction provides a well-defined bilinear form on the space of radial solutions, allowing them to be treated within a framework analogous to Sturm–Liouville theory, despite the non-self-adjoint nature of the underlying Teukolsky radial equation.

This radial scalar product aids in understanding spatial completeness and orthogonality, although it does not explicitly prove these properties. In a follow-up paper, London and Foucoin present a polynomial basis that exactly tridiagonalizes Teukolsky’s radial equation for quasi-normal modes [London2023b].

---

## Natural Polynomials

London finds that although QNMs are generally non-polynomial in nature, they are well-approximated by a confluent Heun polynomial of order $n + 1$ [London2023b].

This Heun polynomial can be constructed via the Gram–Schmidt process, acting on a linearly independent sequence to produce a new sequence that is orthogonal with respect to a chosen scalar product [Axler2015].

London applies the Gram–Schmidt process with respect to the *weight function* $W(\xi)$ described above.

---

## References

* Berti, E. et al. (2009)
* Teukolsky, S. A. (1973a, 1973b)
* London, L. (2023a, 2023b)
* Axler, S. (2015)

---

